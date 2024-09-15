type LogoProps = {
  height: number;
};

export default function Logo({ height }: LogoProps) {
  return (
    <img
      alt="Your Company"
      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
      className={`mx-auto h-${height} w-auto`}
    />
  );
}
