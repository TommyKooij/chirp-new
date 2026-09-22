import { ComponentProps, splitProps } from "solid-js";
import { cn } from "~/lib/utils";

export function Card(props: ComponentProps<"div">) {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <div
      class={cn("rounded-lg bg-zinc-700 text-gray-100 shadow-sm", local.class)}
      {...others}
    />
  );
}

export function CardHeader(props: ComponentProps<"div">) {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <div class={cn("flex flex-col space-y-1.5 p-6", local.class)} {...others} />
  );
}

export function CardTitle(props: ComponentProps<"h3">) {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <h3
      class={cn(
        "text-lg font-semibold leading-none tracking-tight",
        local.class,
      )}
      {...others}
    />
  );
}

export function CardDescription(props: ComponentProps<"p">) {
  const [local, others] = splitProps(props, ["class"]);

  return <p class={cn("text-sm text-gray-100/50", local.class)} {...others} />;
}

export function CardContent(props: ComponentProps<"div">) {
  const [local, others] = splitProps(props, ["class"]);

  return <div class={cn("p-6 pt-0", local.class)} {...others} />;
}

export function CardFooter(props: ComponentProps<"div">) {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <div class={cn("flex items-center p-6 pt-0", local.class)} {...others} />
  );
}
