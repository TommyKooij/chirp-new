import { useSubmission, type RouteSectionProps } from "@solidjs/router";
import { Show } from "solid-js";
import { loginOrRegister } from "~/api";

export default function Login(props: RouteSectionProps) {
  const loggingIn = useSubmission(loginOrRegister);

  return (
    <main class="flex flex-col items-center text-center p-[1em] m-0">
      <h1 class="text-[#335d92] uppercase text-[4em] leading-[1.1] m-[4rem] max-w-[14rem]">
        Login
      </h1>
      <form action={loginOrRegister} method="post">
        <input
          type="hidden"
          name="redirectTo"
          value={props.params.redirectTo ?? "/"}
        />
        <fieldset>
          <legend>Login or Register?</legend>
          <div class="flex justify-center items-center gap-2">
            <label>
              <input
                type="radio"
                name="loginType"
                value="login"
                checked={true}
              />{" "}
              Login
            </label>
            <label>
              <input type="radio" name="loginType" value="register" /> Register
            </label>
          </div>
        </fieldset>
        <div class="flex border border-gray-300 rounded-md p-[0.5em] m-[1em]">
          <label for="username-input">Username</label>
          <input name="username" placeholder="kody" autocomplete="username" />
        </div>
        <div class="flex border border-gray-300 rounded-md p-[0.5em] m-[1em]">
          <label for="password-input">Password</label>
          <input
            name="password"
            type="password"
            placeholder="twixrox"
            autocomplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
        <Show when={loggingIn.result}>
          <p style={{ color: "red" }} role="alert" id="error-message">
            {loggingIn.result!.message}
          </p>
        </Show>
      </form>
    </main>
  );
}
