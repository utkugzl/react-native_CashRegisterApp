import {useTranslation} from 'react-i18next';

const useCategories = () => {
  const {t} = useTranslation();

  return [
    {
      title: t('market'),
      imageSource: require('../assets/images/foodFilterImage.webp'),
    },
    {
      title: t('cleaning'),
      imageSource: require('../assets/images/cleaningFilterImage.jpeg'),
    },
    {
      title: t('clothing'),
      imageSource: require('../assets/images/clothingFilterImage.png'),
    },
    {
      title: t('home'),
      imageSource: require('../assets/images/homeFilterImage.png'),
    },
    {
      title: t('cosmetics'),
      imageSource: require('../assets/images/cosmeticFilterImage.jpeg'),
    },
  ];
};

export default useCategories;
