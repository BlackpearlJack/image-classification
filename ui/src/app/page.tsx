import { AppButton } from "./components/common.components";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <AppButton
        title="Get Started"
        link="/get-started"
        className="bg-primaryColor-500 text-white hover:scale-3d"
      />
    </div>
  );
}
