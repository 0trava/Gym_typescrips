import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";



type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {
  return <section id="cotuctus" className="mx-auto w-5/6 pt-24 pb-25">
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>

    </motion.div>


  </section>
}

export default ContactUs;