import { Mode } from "../types/mode";

type ElementType = {
  title: string;
  description: string;
};

const element: ElementType[] = [
  {
    title: "magnam facilis autem",
    description:
      "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    title: "qui est esse",
    description:
      "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    title: "ea molestias quasi",
    description:
      "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
  },
  {
    title: "eum et est occaecati",
    description:
      "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
  },
  {
    title: "nesciunt quas odio",
    description:
      "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque",
  },
];

type cardsProps = {
  mode: Mode;
};

export default function Cards({ mode }: cardsProps) {
  return (
    <>
      <div className="container ">
        <div className="row d-flex justify-content-center ">
          {element.map((el, index) => (
            <div
              key={index}
              className={
                mode === Mode.dark
                  ? "card  col-5  m-1 bg-light bg-opacity-10 shadow text-white"
                  : "card  col-5  m-1 bg-light bg-opacity-10 shadow "
              }
            >
              <div className="card-body d-flex flex-column justify-content-start align-items-center">
                <h6 className="card-title text-uppercase">{el.title}</h6>
                <hr
                  className={
                    mode === Mode.dark
                      ? "border border-danger border-3 w-25"
                      : "border border-primary border-3 w-25"
                  }
                />
                <p className="card-text">{el.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
