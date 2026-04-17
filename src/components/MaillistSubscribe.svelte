<script lang="ts">
import Field from "./Field.svelte";
import Button from "./Button.svelte";
import {addToMaillist} from "../firebase/client";

let emailAdress = $state("");

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function submitEmail() {
    if(!validateEmail(emailAdress)) {
        alert(`"${emailAdress}" is geen email adres`);
        emailAdress = "";
        return;
    }

    addToMaillist(emailAdress)
        .then(() => {
            emailAdress = "";
        })
        .catch((err) => {
            alert(`Kan niet registreren met "${emailAdress}". Mogelijk bent u al aangemeld`);
            emailAdress = "";
            throw err;
        })
}

</script>

<div class={["flex", "flex-col", "items-center", "gap-inner"]}>
    <p class={["text-white", "font-semibold", "text-lg"]}>Registreer voor de maillijst</p>
    <div class={["flex", "gap-0", "w-full"]}>
        <Field type="email" bind:value={emailAdress} name="Uw email" onLight={false} useFlatRight={true} useFullRound={true} classes={["px-base", "w-full"]} />
        <Button onclick={submitEmail} onLight={false} useFlatLeft={true} useFullRound={true} classes={["text-primary", "px-base"]}>
            Ga
        </Button>
    </div>
</div>