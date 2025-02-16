const ThemeToggle = (props) => {
  return (
    <button onClick={props.changeTheme} className="p-2 rounded-full bg-light-card transition border border-dark-background">
      <img
        src={props.theme === "light" ? "/assets/darkTheme.png" : "/assets/light.png"}
        alt={props.theme === "light" ? "Modo Escuro" : "Modo Claro"}
        className={`w-6 h-6 p-0`}

      />
    </button>
  );
};

export default ThemeToggle;
