import Header from "../component/Header";
import SearchFilter from "../component/search-filter";
import Footer from "../component/Footer";

export default function Recipe () {

  return (
    <>
      <Header />
      <main className="mb-11">
        <SearchFilter/>
      </main>
    </>
  );
}