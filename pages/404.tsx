import Lottie from 'lottie-react';
import animation from '@/lib/animation/404.json';
import HeadSeo from '@/components/seo';
const ErrorFourOFour = () => {
  return (
    <>
      <HeadSeo
        title="Omg this page broken. hehe"
        description="404 page not found"
        ogTitle="404 page not found"
      />
      <div className="flex flex-col items-center justify-center">
        <Lottie animationData={animation} className="h-[700px] w-[700px]" />
      </div>
    </>
  );
};

export default ErrorFourOFour;
