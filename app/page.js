import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Site Under Construction</title>
        <meta name="description" content="Our website is currently under construction. Stay tuned for updates!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black-100 text-center">
        <h1 className="text-4xl font-bold mb-4">🚧 Site Under Construction 🚧</h1>
        <p className="text-lg mb-6">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <p className="text-sm text-gray-600">
          This site will be live soon. Thank you for your patience!
        </p>
      </div>
    </>
  );
}
