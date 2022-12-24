import Lottie from 'lottie-react';
import animation from '@/lib/animation/404.json';
const ErrorFourOFour = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Lottie animationData={animation} className="h-[700px] w-[700px]" />
    </div>
  );
};

export default ErrorFourOFour;
