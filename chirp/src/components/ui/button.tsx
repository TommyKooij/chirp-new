import { Dynamic } from "solid-js/web";
import { JSX, splitProps, ValidComponent, type ComponentProps } from "solid-js";

import * as ButtonPrimitive from "@kobalte/core/button";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-zinc-700 text-gray-100 hover:bg-zinc-800 focus-visible:ring-zinc-700",

        destructive:
          "bg-red-800 text-red-500 hover:bg-red-900 focus-visible:ring-red-700",

        ghost:
          "bg-transparent text-gray-100 hover:bg-zinc-700 focus-visible:ring-zinc-700",

        link: "underline-offset-4 hover:underline text-gray-100 focus-visible:ring-zinc-700",
      },

      size: {
        default: "h-10 px-4 py-2",

        sm: "h-9 px-3 text-xs",

        lg: "h-11 px-8",

        icon: "h-10 w-10",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonProps<T extends ValidComponent = "button"> =
  ButtonPrimitive.ButtonRootProps<T> &
    ComponentProps<T> &
    VariantProps<typeof buttonVariants> & {
      as?: T;
      class?: string | undefined;
      children?: JSX.Element;
    };

export function Button<T extends ValidComponent = "button">(
  props: PolymorphicProps<T, ButtonProps<T>>,
) {
  const [local, others] = splitProps(props, ["as", "variant", "size", "class"]);

  return (
    <Dynamic
      component={local.as ?? "button"}
      class={cn(
        buttonVariants({
          variant: local.variant,
          size: local.size,
        }),
        local.class,
      )}
      {...others}
    />
  );
}
