// 1. Agregamos el parámetro opcional 'rounded' (boolean) a la interfaz
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "destructive";
  rounded?: boolean; // Nuevo parámetro opcional
}

// 2. Extraemos 'rounded' en los parámetros (por defecto en false)
export const Button = ({ variant = "primary", rounded = false, children }: ButtonProps) => {
  
  // 3. Modificamos las clases para cambiar el borde dependiendo del parámetro 'rounded'
  // Si 'rounded' es true, usamos 'rounded-full', si es false, usamos 'rounded-md'
  const borderRadiusClass = rounded ? "rounded-full" : "rounded-md";

  // Agregamos esa clase dinámica a nuestros estilos base
  let className = `${borderRadiusClass} bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`;

  // Estilo outline
  if (variant === "outline") {
    className = `${borderRadiusClass} bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50`;
  } else if (variant === "destructive") {
    className = `${borderRadiusClass} bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`;
  }

  // Estilo primario (por defecto)
  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
};