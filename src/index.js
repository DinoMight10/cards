/*
Props are arguments passed into React components.

Props are passed to components via HTML attributes.

props stands for properties.
Props are also how you pass data from one component to another, as parameters.
React allows us to pass information to a Component using something called props (stands for properties).
Props are objects which can be used inside a component.

*/
import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";

ReactDOM.render(
  <>
  <Card
  imgsrc="https://th.bing.com/th/id/R.056be94fc23266648581922ffae560f8?rik=mRvMETax2JsNMA&riu=http%3a%2f%2fearth-chronicles.com%2fwp-content%2fuploads%2f2018%2f10%2ftyr3.jpg&ehk=%2fyodGeD%2b7ocEHAfOelKpcKYjgqZgtXGgf5g5Y7pU4xM%3d&risl=&pid=ImgRaw&r=0"
  title="Tyrannosaurus"
  category="Tyrannosauridae"
  desc="Tyrannosaurus is a genus of large theropod dinosaur. The species Tyrannosaurus rex (rex meaning king in Latin, often called T. rex or colloquially T-Rex, is one of the best represented theropods"
  link="https://dinopedia.fandom.com/wiki/Tyrannosaurus"
  />
  <br/>

<Card
  imgsrc="https://th.bing.com/th/id/OIP.VnQm80JjbjfiGOQ4VW_VTAHaEK?pid=ImgDet&rs=1"
  title="Triceratops"
  category="Marginocephalians"
  desc="Triceratops is a genus of herbivorous chasmosaurine ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the Late Cretaceous period, about 68 million years ago in what is now North America."
  link="https://dinopedia.fandom.com/wiki/Triceratops"
  />
<br/>

<Card
  imgsrc="https://th.bing.com/th/id/R.82d9f2c5f3b391c2bfe18af9884784ea?rik=7UaGn7ZbQQJgmw&riu=http%3a%2f%2fwww.johnsibbick.com%2fimages%2fprehis-image%2fdein.jpg&ehk=I2cZ%2fqlpPxoeX4r4pvPirLmJZkS1j%2bmxgeVSR6hyljA%3d&risl=&pid=ImgRaw&r=0"
  title="Deinonychus"
  category="Dromaeosauridae"
  desc="Deinonychus is a genus of dromaeosaurid theropod dinosaur with one described species, Deinonychus antirrhopus. This species, which could grow up to 3.4 meters (11 ft) long, lived during the early Cretaceous Period, about 115–108 million years ago (from the mid-Aptian to early Albian stages)."
  link="https://dinopedia.fandom.com/wiki/Deinonychus"
  />
  <br/>

<Card
  imgsrc="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9971ddf5-559a-4aad-bca8-05b7ba7571e1/dcvf3r0-59958f4a-d345-4848-95fb-347747c260ff.jpg/v1/fill/w_1280,h_799,q_70,strp/parasaurolophus_in_the_woods_by_deskridge_dcvf3r0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Nzk5IiwicGF0aCI6IlwvZlwvOTk3MWRkZjUtNTU5YS00YWFkLWJjYTgtMDViN2JhNzU3MWUxXC9kY3ZmM3IwLTU5OTU4ZjRhLWQzNDUtNDg0OC05NWZiLTM0Nzc0N2MyNjBmZi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.YX5j6b4Ull9itWBr_DP8S_stbx4QLNAd_WIiHB3FMSE"
  title="Parasaurolophus"
  category="Hadrosauridae"
  desc="Parasaurolophus is a genus of herbivorous hadrosaurid ornithopod dinosaur that lived in what is now North America and possibly Asia during the Late Cretaceous Period, about 76.5–73 million years ago."
  link="https://dinopedia.fandom.com/wiki/Parasaurolophus"
  />
  <br/>

<Card
  imgsrc="https://1.bp.blogspot.com/-ncpw4hlD63g/XAQvEeAnlHI/AAAAAAAAIBE/ThywslQBzekyNd-R4zFDllfXRtPkeRghQCLcBGAs/w1200-h630-p-k-no-nu/050604143936_Sinornithomimus_d3de.jpg"
  title="Gallimimus"
  category="Ornithomimidae"
  desc="Gallimimus is a genus of theropod dinosaur that lived in what is now Mongolia during the Late Cretaceous period, about seventy million years ago (mya). Several fossils in various stages of growth were discovered by Polish-Mongolian expeditions in the Gobi Desert of Mongolia during the 1960s."
  link="https://dinopedia.fandom.com/wiki/Gallimimus"
  />
  </>,document.getElementById("root")
  );