import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  className?: string; // Prop optionnelle pour ajouter des classes CSS
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, className }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <motion.img
      src={src}
      style={{ y }} // Applique l'effet parallax
      className={`w-full h-64 object-cover rounded-lg shadow-lg ${className}`} // Ajoute la classe reçue
      alt="Parallax Example"
    />
  );
};

export default ParallaxImage;
