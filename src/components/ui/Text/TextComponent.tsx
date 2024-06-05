import clsx from "clsx";

type HtmlTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

interface TextProps {
  as: HtmlTags;
  className?: string;
  children: React.ReactNode;
}

function Text({ as: Tag, className, children }: TextProps) {
  return <Tag className={clsx(className)}>{children}</Tag>;
}

export function H1({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Text
      as="h1"
      className={clsx(
        "text-3xl lg:text-4xl font-bold text-gray-300 mt-5",
        className
      )}
    >
      {children}
    </Text>
  );
}

export function H2({
  variant,
  className,
  children,
}: {
  variant?: "default" | "shopping-cart";
  className?: string;
  children: React.ReactNode;
}) {
  let clasNames = "text-2xl font-bold text-gray-300";

  switch (variant) {
    case "shopping-cart":
      clasNames =
        "flex items-center justify-center text-2xl font-bold text-gray-600";
      break;
    default:
      break;
  }
  return (
    <Text as="h2" className={clsx(clasNames, className)}>
      {children}
    </Text>
  );
}

export function H3({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Text
      as="h3"
      className={clsx("text-xl font-bold text-gray-300", className)}
    >
      {children}
    </Text>
  );
}

export function H4({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Text
      as="h4"
      className={clsx("text-lg font-bold text-gray-300", className)}
    >
      {children}
    </Text>
  );
}

export function H5({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Text
      as="h5"
      className={clsx("text-base font-bold text-gray-300", className)}
    >
      {children}
    </Text>
  );
}

export function H6({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Text
      as="h6"
      className={clsx("text-sm font-bold text-gray-300", className)}
    >
      {children}
    </Text>
  );
}

export function P({
  variant,
  className,
  children,
}: {
  variant?: "default" | "shipping" | "shipping-info";
  className?: string;
  children: React.ReactNode;
}) {
  let classNames = "text-gray-300";

  switch (variant) {
    case "shipping":
      classNames = "text-green-500 text-xs";
      break;
    case "shipping-info":
      classNames = "text-gray-300 font-bold";
      break;
    default:
      break;
  }

  return (
    <Text as="p" className={clsx(classNames, className)}>
      {children}
    </Text>
  );
}

export function SPAN({
  variant,
  className,
  children,
}: {
  variant?: "default" | "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
}) {
  let classNames = "text-lg";

  switch (variant) {
    case "primary":
      classNames = "text-lg text-gray-300";
      break;
    case "secondary":
      classNames = "text-xl lg:text-2xl font-semibold text-gray-300";
      break;
  }
  return (
    <Text as="span" className={clsx(classNames, className)}>
      {children}
    </Text>
  );
}
