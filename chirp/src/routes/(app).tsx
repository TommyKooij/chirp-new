import {
  A,
  createAsync,
  RouteSectionProps,
  type RouteDefinition,
} from "@solidjs/router";
import { getUser, logout } from "~/api";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "~/components/layout/navigation";
import { Button } from "~/components/ui/button";

export const route = {
  preload() {
    return getUser();
  },
} satisfies RouteDefinition;

export default function AppLayout(props: RouteSectionProps) {
  const user = createAsync(async () => getUser(), { deferStream: true });
  return (
    <div class="grid grid-cols-4 min-h-screen divide-x divide-slate-400/50">
      <div id="side-navbar" class="sticky col-span-1 place-items-end">
        <h1 class="text-4xl font-bold px-2 my-2">Chirp</h1>

        <NavigationMenu orientation="vertical">
          <NavigationMenuItem>
            <NavigationMenuTrigger
              as={A}
              href="/home"
              class="justify-start rounded-r-none"
            >
              Home
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              as={A}
              href="/discussions"
              class="justify-start rounded-r-none"
            >
              Discussions
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              as={A}
              href="/chats"
              class="justify-start rounded-r-none"
            >
              Chats
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenu>

        <Button>Log out</Button>
      </div>

      <main class="col-span-2">{props.children}</main>

      <div id="aside-container" class="sticky col-span-1"></div>
    </div>
  );
}
