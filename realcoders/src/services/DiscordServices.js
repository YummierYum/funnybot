import axios from "axios";
import { initialFormState } from "../App";

function DiscordService(setFormData) {

    const Send = async (data) => {
        const body = {
            content: "Message Received",
            tts: false,
            color: "white",
            embeds: [
                {
                    title: "ContactForm",
                    description: data,
                },
            ],
        };

        try {
           const data = await axios.post(
            "https://discord.com/api/webhooks/1204347961786634270/K0gJpdDZ4XD3s0Xv8Ct1zCT-JIwy3Ksp5v352APqTj0YRiXS8ns_-m7SphwCQ4T8xx8X",
            body
            );
            console.log(data);
            setFormData(initialFormState);
        } catch (err) {
            console.error(err);
        }
    };
    return {
        Send,
    };
}

export default DiscordService;