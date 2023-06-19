import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Heading from '../Typography/Heading';
import Text from '../Typography/Text';

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.profileImg}>
        <Image
          src="/profilee.png"
          alt='profile'
          width={200}
          height={200}
        />
      </div>

      <Heading className={styles.name}>
        Aziz Limonu
      </Heading>

      <Text className={styles.description}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis deserunt
      </Text>
    </div>
  )
}

export default HeroSection;