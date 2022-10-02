import ContainerArticles from "./ContainerArticles";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { lg } from "../../config";
const mock = [
  {
    title: "Tesla „AI Day“: Elon Musk führt Roboter-Prototypen „Optimus“ vor",
    description:
      "Roboter könnten für Tesla bedeutender werden als Elektroautos, verspricht Elon Musk. Nun enthüllte er einen Prototypen, der billiger sein soll als ein Auto.",
    image:
      "https://www.handelsblatt.com/images/screenshot-vom-tesla-ai-event-prototyp-von-optimus/28719108/2-format2003.jpg",
    date: "2022-10-01T11:00:00Z",
  },
  {
    title: "聪明人，特斯拉喊你去上班",
    description:
      "出品 | 虎嗅汽车组作者 | 李文博头图 | The Verge当伊隆·马斯克将一份可能是世界上最具诱惑力 的工作机会摆在你面前的时候，你会做出什么选择？是毫不犹疑地启程登舰，加入加速世界向可持续能源的转变进程。还是先缓缓，看看其它公司给出的年终奖是不是比特斯拉更丰厚。如果很难一下子做决定，不妨先来看看这场于北美时间 2022 年 9 月 30 日晚间，北京时间 10 月 1 日早上举办的特斯拉 2022 AI Day，深刻认知特斯拉公司业务和愿景的同时，也好好对自己现有的工作能力进行一次全方位检测。毕竟这是一场连…",
    image:
      "https://img.huxiucdn.com/article/cover/202210/01/182733611346.jpg?imageView2/1/w/1440/h/810/|imageMogr2/strip/interlace/1/quality/85/format/jpg",
    date: "2022-10-01T10:56:00Z",
  },
  {
    title:
      "Tesla показала робота-гуманоида Optimus, который заменит людей на производстве",
    description:
      "Компания Tesla на мероприятии AI Day показала человекоподобного робота, который в перспективе может заменить часть сотрудников на производствах.",
    image:
      "https://snob.ru/indoc/og_image/87/1c/871c28e4e5b7b4dbab923ff0dcd9f4a932e7f26006794ce45a6fec1f88a85e1f.png",
    date: "2022-10-01T10:55:00Z",
  },
  {
    title:
      "Tesla, 'insansı robot' Optimus'u tanıttı! Musk: Aklınızı başınızdan alacak",
    description:
      "Elektrikli araç üreticisi Tesla, AI Day 2022 etkinliğinde merakla beklenen insansı (humanoid) robotu Bumble C ve Optimus'un ilk prototipin tanıttı. Prototip robot dün ABD'de yapılan tanıtımda sahneye çıktı, yürüdü ve seyircilere el salladı.",
    image:
      "https://i4.hurimg.com/i/hurriyet/75/1200x675/633818804e3fe02b182756fa.jpg",
    date: "2022-10-01T10:43:28Z",
  },
  {
    title: "AP News Summary at 6:42 a.m. EDT",
    description: "Russia accused of 'kidnapping' head of Ukraine nuclear plant",
    image:
      "https://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/custom/image/c72cf8ac-c550-11ea-86bd-3761faee86a6.jpg?resize=600%2C315",
    date: "2022-10-01T10:42:21Z",
  },
];

test("render component ContainerArticles", () => {
  expect(7 + 6).toBe(13);
  const component = render(<ContainerArticles data={mock} />);
  for (const article of mock) {
    component.getByText(article.title);
  }
});
