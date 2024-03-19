export default function Footer() {
  return (
    <footer className="font-title text-gray-600 py-4 border-t-[1px] border-gray-200">
      <div className="container mx-auto text-center flex justify-between">
        <p>
          Authored with ❤️ by{" "}
          <a
            className="text-blue-500 hover:underline"
            target="_blank"
            href="https://github.com/inhaq/"
          >
            inhaq
          </a>
        </p>
        <p>
          &copy; {new Date().getFullYear()} Innoscripta News. All rights
          reserved.
        </p>

        <p>
          Built with{" "}
          <a
            className="text-blue-500 hover:underline"
            target="_blank"
            href="https://reactjs.org/"
          >
            React
          </a>
          ,{" "}
          <a
            className="text-blue-500 hover:underline"
            target="_blank"
            href="https://vitejs.dev/"
          >
            Vite
          </a>{" "}
          &{" "}
          <a
            className="text-blue-500 hover:underline"
            target="_blank"
            href="https://tailwindcss.com/"
          >
            Tailwind
          </a>
        </p>
      </div>
    </footer>
  );
}
