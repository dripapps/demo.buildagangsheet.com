function createGangSheet() {
    gs_builder
      .open({
        container: "gs-builder", // optional - id of the element for the modal to be rendered in.
        mode: "production", 
        shop_id: '95070776-c392-40bc-b75c-70b4ef5b6837',
        size_id: 2, // optional, default: the first size.
        sizes: [
          {
            id: 1, // Required
            width: 22, // required
            height: 22, // required
            unit: "in", // optional, default: "in"
            title: "22 in X 22 in", // optional, default: "{width}{unit} x {height}{unit}"
          },
          {
            id: 2,
            width: 22,
            height: 60,
          },
          {
            id: 3,
            width: 22,
            height: 120,
          },
          {
            id: 4,
            width: 22,
            height: 240,
          },
          {
            id: 5,
            width: 22,
            height: 60,
            title: '22in X 60in Add-On',
            visible: 'Hidden'
          },
          {
            id: 6,
            width: 22,
            height: 120,
            title: '22in X 120in Add-On',
            visible: 'Hidden'
          },
        ],
      })
      .on("design:created", (res) => {
        gs_builder.close();
        console.log(res)
      })
      .on('closed', (res) => {
        console.log(res)
      })
  }

  function editGangSheet(e) {
    gs_builder
      .open({
        mode: "production",
        shop_id: '95070776-c392-40bc-b75c-70b4ef5b6837',
        design_id: document.getElementById('designId').value,
      })
      .on({
        "design:updated": (e) => {
          console.log(e);
          gs_builder.close();
        },
      });
  }