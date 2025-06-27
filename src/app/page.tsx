const Home = () => {
  return ( 
    <>
      <div className="min-h-screen bg-pink-200 flex flex-col items-center justify-start">
        <div className="w-full bg-pink-500 py-8 flex justify-center shadow-md">
          <h1 className="text-4xl font-extrabold text-white">Bem-vindo ao Site Sabrina Nail Designer</h1>
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-pink-700 mb-4">Site em andamento</h2>
          <p className="text-lg text-pink-800">
        Estamos trabalhando para trazer novidades em breve.<br />
        Fique ligado!
          </p>
        </div>
      </div>
    </>
   );
}
 
export default Home;