import joblib
import json
import numpy as np
import base64
import cv2
from wavelet import w2d

__class_name_to_number = {}
__class_number_to_name = {}

__model = None

def classify_image(image_base64_data, file_path=None):
    imgs = get_cropped_image_if_2_eyes(file_path, image_base64_data)
    
    result = []
    
    for img in imgs:
        scalled_raw_img = cv2.resize(img, (32, 32))
        img_har = w2d(img,'db1',5)
        scalled_img_har = cv2.resize(img_har, (32, 32))
        combined_img = np.vstack((scalled_raw_img.reshape(32*32*3,1),scalled_img_har.reshape(32*32,1)))
        
        len_image_array = 32*32*3 + 32*32
        
        final = combined_img.reshape(1,len_image_array).astype(float)
        
        result.append({
            'class': class_number_to_name(__model.predict(final)[0]),
            'class_probability': np.round(__model.predict_proba(final)*100,2).tolist()[0],
            'class_dictionary': __class_name_to_number
        })
    
    return result

def class_number_to_name(class_num):
    return __class_number_to_name[class_num]

def load_saved_artifacts():
    print("loading saved artifacts...start")
    global __class_name_to_number
    global __class_number_to_name

    with open("./artifacts/class_dictionary.json", "r") as f:
        __class_name_to_number = json.load(f)
        __class_number_to_name = {v:k for k,v in __class_name_to_number.items()}

    global __model
    if __model is None:
        with open('./artifacts/saved_model.pkl', 'rb') as f:
            __model = joblib.load(f)
    print("loading saved artifacts...done")      

def get_cv2_image_from_base64_string(b64str):
    # This line splits the uri string by commas
    encoded_data = b64str.split(',')[1]
    # decodes the base64-encoded string back into its original binary data (bytes).
    string_enc = base64.b64decode(encoded_data)
    # converts these bytes into a NumPy array of type uint8, which is a common format for representing image data in OpenCV
    nparr = np.frombuffer(string_enc, np.uint8)
    # This line uses OpenCV's imdecode function to convert the NumPy array into an image
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    # Finally, the decoded image (usually represented as a multi-dimensional NumPy array) is returned for further processing or display.
    return img

def get_cropped_image_if_2_eyes(image_path, image_base64_data):
    face_cascade = cv2.CascadeClassifier('haarcascades/haarcascade_frontalface_default.xml')
    eye_cascade = cv2.CascadeClassifier('haarcascades/haarcascade_eye.xml')

    if image_path:
        img = cv2.imread(image_path)
    else:
        img = get_cv2_image_from_base64_string(image_base64_data)

    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.3, 5)

    cropped_faces = []
    for (x,y,w,h) in faces:
            roi_gray = gray[y:y+h, x:x+w]
            roi_color = img[y:y+h, x:x+w]
            eyes = eye_cascade.detectMultiScale(roi_gray)
            if len(eyes) >= 2:
                cropped_faces.append(roi_color)
    return cropped_faces

def get_b64_test_image_for_lovato():
    with open("server/b64.txt") as f:
        return f.read()

if __name__ == '__main__':
    load_saved_artifacts()
    
    # print(classify_image(get_b64_test_image_for_lovato(), None))
    
    # print(classify_image(None, "server/test-images/1c309ab9cb3d4841bc2820ec5045cdae.jpg"))
    # print(classify_image(None, "server/test-images/172e758f667241b98a1199c93c181f1b.jpg"))
    # print(classify_image(None, "server/test-images/4fb1d74bc5e60528d5e82d934894c69d.jpg"))
    # print(classify_image(None, "server/test-images/7e6b2009094eb8db7421da90b30bfa3c.jpg"))
    
    # print(classify_image(None, "server/test-images/37a42b371dcaa2f4910e8d81f3e3de75.jpg"))