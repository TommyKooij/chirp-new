import { JSX, splitProps, ValidComponent } from "solid-js";
import { A } from "@solidjs/router";

import type { PolymorphicProps } from "@kobalte/core";
import * as NavigationMenuPrimitive from "@kobalte/core/navigation-menu";

import { cn } from "~/lib/utils";

type NavigationMenuProps<T extends ValidComponent = "ul"> =
  NavigationMenuPrimitive.NavigationMenuRootProps<T> & {
    class?: string | undefined;
    children?: JSX.Element;
  };

export function NavigationMenu<T extends ValidComponent = "ul">(
  props: PolymorphicProps<T, NavigationMenuProps<T>>,
) {
  const [local, others] = splitProps(props as NavigationMenuProps, [
    "class",
    "children",
  ]);

  return (
    <NavigationMenuPrimitive.Root
      gutter={6}
      class={cn(
        "group/menu flex w-max flex-1 list-none items-center justify-center data-[orientation=vertical]:flex-col [&>li]:w-full",
        local.class,
      )}
      {...others}
    >
      {local.children}
    </NavigationMenuPrimitive.Root>
  );
}

export const NavigationMenuItem = NavigationMenuPrimitive.Menu;

type NavigationMenuTriggerProps<T extends ValidComponent = "button"> =
  NavigationMenuPrimitive.NavigationMenuTriggerProps<T> & {
    class?: string | undefined;
  };

export function NavigationMenuTrigger<T extends ValidComponent = "button">(
  props: PolymorphicProps<T, NavigationMenuTriggerProps<T>>,
) {
  const [local, others] = splitProps(props as NavigationMenuTriggerProps, [
    "class",
  ]);

  return (
    <NavigationMenuPrimitive.Trigger
      class={cn(
        "group/trigger inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-700 hover:text-gray-100 focus:bg-zinc-700 focus:text-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
        local.class,
      )}
      {...others}
    />
  );
}

export function NavigationMenuIcon() {
  return (
    <NavigationMenuPrimitive.Icon aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="relative top-px ml-1 size-3 transition duration-200 group-data-expanded/trigger:rotate-180 group-data-[orientation=vertical]/menu:-rotate-90 group-data-[orientation=vertical]/menu:group-data-expanded/trigger:rotate-90"
      >
        <path d="M6 9l6 6l6-6" />
      </svg>
    </NavigationMenuPrimitive.Icon>
  );
}

type NavigationMenuContentProps<T extends ValidComponent = "ul"> =
  NavigationMenuPrimitive.NavigationMenuContentProps<T> & {
    class?: string | undefined;
  };

export function NavigationMenuContent<T extends ValidComponent = "ul">(
  props: PolymorphicProps<T, NavigationMenuContentProps<T>>,
) {
  const [local, others] = splitProps(props as NavigationMenuContentProps, [
    "class",
  ]);

  return (
    <NavigationMenuPrimitive.Portal>
      <NavigationMenuPrimitive.Content
        class={cn(
          "pointer-events-none absolute left-0 top-0 box-border p-4 focus:outline-none data-expanded:pointer-events-auto",
          local.class,
        )}
        {...others}
      />
    </NavigationMenuPrimitive.Portal>
  );
}

type NavigationMenuLinkProps<T extends ValidComponent = typeof A> =
  NavigationMenuPrimitive.NavigationMenuItemProps<T> & {
    class?: string | undefined;
  };

export function NavigationMenuLink<T extends ValidComponent = typeof A>(
  props: PolymorphicProps<T, NavigationMenuLinkProps<T>>,
) {
  const [local, others] = splitProps(props as NavigationMenuLinkProps, [
    "class",
  ]);

  return (
    <NavigationMenuPrimitive.Item
      class={cn(
        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors  hover:text-gray-100 focus:bg-zinc-700 focus:text-gray-100",
        local.class,
      )}
      {...others}
    />
  );
}

type NavigationMenuLabelProps<T extends ValidComponent = "div"> =
  NavigationMenuPrimitive.NavigationMenuItemLabelProps<T> & {
    class?: string | undefined;
  };

export function NavigationMenuDescription<T extends ValidComponent = "div">(
  props: PolymorphicProps<T, NavigationMenuLabelProps<T>>,
) {
  const [local, others] = splitProps(props as NavigationMenuLabelProps, [
    "class",
  ]);

  return (
    <NavigationMenuPrimitive.ItemLabel
      class={cn("text-sm font-medium leading-none", local.class)}
      {...others}
    />
  );
}