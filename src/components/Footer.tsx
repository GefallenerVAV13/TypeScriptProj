
const Footer = () => {
  return (
    <footer className='absolute bottom-0 left-0 right-0 bg-purple-950 text-white py-10'>
      <div className="container mx-auto px-4">
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex flex-col space-y-2 md:space-y-0 md:space-x-4'>
                <a href='#' className='hover:text-gray-400 transition duration-300'>
                Политика конфиденциальности</a>
                <a href='#' className='hover:text-gray-400 transition duration-300'>
                Пользовательское соглашение
                </a>
            </div>

            <div className='flex flex-col space-y-2 md:space-y-0 md:space-x-4'>
                <h1 className = 'text-xl'>Моя компания</h1>

            </div>

            <div className='flex flex-col space-y-2 md:space-y-0 md:space-x-4 underline'>
                <a className='text-2xl'>Контакты</a>
                <a href='#' className='hover:text-gray-400 transition duration-300'>
                gglox@umail.com</a>
                +8 (979) 696-96-13
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;