import {
  LoadingContainer,
  LoadingContent,
  LoadingIcon,
} from "../styled/Loading";

import Logo from "../assets/images/logo.png";
import { motion } from "framer-motion";
import { growVariant } from "../animationVariants/growAnimation";

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingContent>
        <LoadingIcon
          as={motion.div}
          variants={growVariant}
          initial="initial"
          whileInView="animate"
        >
          <img src={Logo} alt="" />
        </LoadingIcon>
      </LoadingContent>
    </LoadingContainer>
  );
};

export default Loading;
