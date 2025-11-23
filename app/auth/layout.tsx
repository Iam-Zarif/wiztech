import Container from "@/layout/Container";
import loginImg from "@/public/images/login.svg";
import Image from "next/image";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <div className="md:flex pt-18 lg:pt-0 items-center min-h-screen justify-center">
        <div className="grid grid-cols-1 gap-20 max-w-6xl mx-auto lg:grid-cols-12 items-center w-full">
          <div className="col-span-5 flex flex-col items-center w-full">
            {children}
          </div>

          <Image
            src={loginImg}
            width={100}
            height={100}
            className="object-contain mx-auto w-full hidden lg:block lg:col-span-7"
            alt="login"
            priority
          />
        </div>
      </div>
    </Container>
  );
}
