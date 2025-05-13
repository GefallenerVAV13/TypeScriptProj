const Footer = () => {
  return (
    <footer className='bg-purple-950 text-white py-8'>
      <div className="container mx-auto px-4">
        <div className='flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0'>
          
          {/* Левые ссылки */}
          <div className='flex flex-col space-y-2 text-center md:text-left'>
            <a href='#' className='hover:text-gray-400 transition duration-300'>Политика конфиденциальности</a>
            <a href='#' className='hover:text-gray-400 transition duration-300'>Пользовательское соглашение</a>
          </div>

          {/* Центральный блок */}
          <div className='text-center'>
            <h1 className='text-xl font-bold'>Моя компания</h1>
          </div>

          {/* Правые контакты */}
          <div className='flex flex-col space-y-2 text-center md:text-right'>
            <a className='text-2xl font-semibold'>Контакты</a>
            <a href='mailto:gglox@umail.com' className='hover:text-gray-400 transition duration-300'>
              gglox@umail.com
            </a>
            <span>+8 (979) 696-96-13</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;