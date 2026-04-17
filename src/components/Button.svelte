<script lang="ts">
import { clsList } from '../util/classes';

interface Props {
    onLight: boolean;
    onclick?: () => void;
    useFlatLeft?: boolean;
    useFullRound?: boolean;
    classes?: string[];
}

const {onLight, onclick = () => {}, useFlatLeft = false, useFullRound = false, classes = []}: Props = $props();
</script>

<button onclick={onclick} class={clsList("cursor-pointer", useFullRound ? "rounded-full" : "rounded-base", "shadow-sm/25", "p-inner", (onLight ? "bg-secundary-on-light" : "bg-secundary-on-dark"), useFlatLeft ? "rounded-l-none" : null, "active:opacity-75", ...classes)}><slot /></button>