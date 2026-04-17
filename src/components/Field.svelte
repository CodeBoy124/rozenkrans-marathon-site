<script lang="ts">
import { clsList } from '../util/classes';

interface Props {
    name: string;
    onLight: boolean;
    value: string;
    useFlatRight?: boolean;
    useFullRound?: boolean;
    classes?: string[];
    type?: string;
}

let {name, onLight, value = $bindable(''), useFlatRight = false, useFullRound = false, classes = [], type = 'text'}: Props = $props();

</script>

<input bind:value={value} placeholder={name} type={type} class={clsList("border-solid", "border", useFullRound ? "rounded-full" : "rounded-base", "inset-shadow-sm/25", "shadow-sm/25", "outline-0", "p-inner", (onLight ? "text-secundary-on-light" : "text-secundary-on-dark"), (onLight ? "border-secundary-on-light" : "border-secundary-on-dark"), useFlatRight ? "rounded-r-none" : null, ...classes)} />