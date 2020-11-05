import React from "react";
import Datatable from "react-bs-datatable";

// Create table headers consisting of 4 columns.
const header = [
  {
    title: "Username (filterable)",
    prop: "username",
    sortable: true,
    filterable: true,
  },
  { title: "Name", prop: "realname", sortable: true },
  { title: "Location", prop: "location" },
  { title: "Last Updated", prop: "date", sortable: true },
];

// Randomize data of the table columns.
// Note that the fields are all using the `prop` field of the headers.
const body = Array.from(new Array(57), () => {
  const rd = (Math.random() * 10).toFixed(1);

  if (rd > 0.5) {
    return {
      username: "i-am-billy",
      realname: `Billy ${rd}`,
      location: "Mars",
    };
  }

  return {
    username: "john-nhoj",
    realname: `John ${rd}`,
    location: "Saturn",
  };
});

// Then, use it in a component.
function BootTab() {
  const onRowClick = (data) => {
    alert("clicked", data);
  };
  return (
    <Datatable
      tableHeaders={header}
      tableBody={body}
      rowsPerPage={5}
      onRowClick={onRowClick}
      rowsPerPageOption={[5, 10, 15, 20]}
      initialSort={{ prop: "username", isAscending: true }}
    />
  );
}

export default BootTab;
