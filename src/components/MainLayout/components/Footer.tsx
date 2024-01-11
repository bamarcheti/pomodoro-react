const Footer = () => {
  return (
    <div
      className="flex w-full items-center p-4 justify-center text-primary text-sm md:text-base xl:text-lg text-center"
      title={`@ ${new Date().getFullYear()} Pomodoro em React feito pela Bárbara MF. Todos os direitos
    reservados`}
    >
      @ {new Date().getFullYear()} Pomodoro em React feito pela Bárbara MF. Todos os direitos
      reservados
    </div>
  );
};

export default Footer;
