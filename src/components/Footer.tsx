const Footer = () => {
  return (
    <div
      className="w-full pb-7 pt-10 text-primary text-xs text-center"
      title={`@ ${new Date().getFullYear()} Pomodoro em React feito pela Bárbara MF. Todos os direitos
    reservados`}
    >
      @ {new Date().getFullYear()} Pomodoro em React feito pela Bárbara MF. Todos os direitos
      reservados
    </div>
  );
};

export default Footer;
