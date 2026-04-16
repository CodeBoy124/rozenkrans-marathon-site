<script lang="ts">
import pageconfig from "../pageconfig.json"
import logo from "../assets/rmw-icon-transparent.png";

let isOpen = $state(false);

function toggleOpen() {
    isOpen = !isOpen;
}
</script>

<div class={["bg-primary", "sticky", "top-0", "z-50", "shadow-sm/25"]}>
    <header class={["py-base", "px-content", "flex", "flex-col", "gap-base", "w-full", "max-w-page", "m-auto"]}>
        <div class={["flex", "justify-between", "items-center", "text-white"]}>
            <a href={pageconfig.sitelocatie} class={["flex", "items-center", "gap-inner"]}>
                <img src={logo.src} alt="Rozenkrans marathon logo" class={["h-12.5"]} />
                <p>Rozenkrans<br />Marathon</p>
            </a>
            <button aria-label="toggle navbar" onclick={toggleOpen}>
                {#if !isOpen}
                    <!-- ic:baseline-menu -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"/></svg>
                {/if}
                {#if isOpen}
                    <!-- ic:baseline-close -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/></svg>
                {/if}
            </button>
        </div>
    </header>
    <div class={[isOpen ? "block" : "hidden", "absolute", "left-0", "top-full", "w-full"]}>
        <div class={["bg-primary", "w-full"]}>
            <nav class={["m-auto", "w-page", "pb-base", "px-content"]}>
                <ul class={["list-disc", "list-inside", "text-screen"]}>
                    <li><a href="#">One</a></li>
                    <li><a href="#">Two</a></li>
                </ul>
            </nav>
        </div>
        <button onclick={toggleOpen} class={["bg-black", "opacity-50", "h-screen", "w-full"]} aria-label="close menu"></button>
    </div>
</div>