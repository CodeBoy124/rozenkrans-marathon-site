<script lang="ts">

interface Props {
    question: string;
    answer: string;
}

let {question, answer}: Props = $props();
let isOpen = $state(false);

function toggleShown() {
    isOpen = !isOpen;
}

</script>

<button onclick={toggleShown} class="border-solid border border-secundary-on-light rounded-base inset-shadow-sm/25 shadow-sm/25 p-inner">
    <div class="flex justify-between font-semibold">
        <span class="text-lg">{question}</span>
        <span>
            {isOpen ? '+' : '-'}
        </span>
    </div>
    {#if isOpen}
        <p class="text-left">{answer}</p>
    {/if}
</button>