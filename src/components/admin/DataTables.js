import React from "react";
import { MDBDataTableV5 } from "mdbreact";
//import Result from '../components/result';

export default function DataTables() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "Name",
        field: "name",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "Position",
        field: "position",
        width: 270,
      },
      {
        label: "Office",
        field: "office",
        width: 200,
      },
      {
        label: "Age",
        field: "age",
        sort: "asc",
        width: 100,
      },
      {
        label: "Start date",
        field: "date",
        sort: "disabled",
        width: 150,
      },
      {
        label: "Salary",
        field: "salary",
        sort: "disabled",
        width: 100,
      },
    ],
    rows: [
      {
        name: "Tiger Nixon",
        position: "System Architect",
        office: "Edinburgh",
        age: "61",
        date: "2011/04/25",
        salary: "$320",
      },
      {
        name: "Garrett Winters",
        position: "Accountant",
        office: "Tokyo",
        age: "63",
        date: "2011/07/25",
        salary: "$170",
      },
      {
        name: "Ashton Cox",
        position: "Junior Technical Author",
        office: "San Francisco",
        age: "66",
        date: "2009/01/12",
        salary: "$86",
      },
      {
        name: "Cedric Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433",
      },
      {
        name: "Airi Satou",
        position: "Accountant",
        office: "Tokyo",
        age: "33",
        date: "2008/11/28",
        salary: "$162",
      },
      {
        name: "Brielle Williamson",
        position: "Integration Specialist",
        office: "New York",
        age: "61",
        date: "2012/12/02",
        salary: "$372",
      },
      {
        name: "Herrod Chandler",
        position: "Sales Assistant",
        office: "San Francisco",
        age: "59",
        date: "2012/08/06",
        salary: "$137",
      },
      {
        name: "Vivian Harrell",
        position: "Financial Controller",
        office: "San Francisco",
        age: "62",
        date: "2009/02/14",
        salary: "$452",
      },
      {
        name: "Timothy Mooney",
        position: "Office Manager",
        office: "London",
        age: "37",
        date: "2008/12/11",
        salary: "$136",
      },
      {
        name: "Jackson Bradshaw",
        position: "Director",
        office: "New York",
        age: "65",
        date: "2008/09/26",
        salary: "$645",
      },
      {
        name: "Olivia Liang",
        position: "Support Engineer",
        office: "Singapore",
        age: "64",
        date: "2011/02/03",
        salary: "$234",
      },
      {
        name: "Bruno Nash",
        position: "Software Engineer",
        office: "London",
        age: "38",
        date: "2011/05/03",
        salary: "$163",
      },
      {
        name: "Sakura Yamamoto",
        position: "Support Engineer",
        office: "Tokyo",
        age: "37",
        date: "2009/08/19",
        salary: "$139",
      },
      {
        name: "Thor Walton",
        position: "Developer",
        office: "New York",
        age: "61",
        date: "2013/08/11",
        salary: "$98",
      },
      {
        name: "Finn Camacho",
        position: "Support Engineer",
        office: "San Francisco",
        age: "47",
        date: "2009/07/07",
        salary: "$87",
      },
      {
        name: "Serge Baldwin",
        position: "Data Coordinator",
        office: "Singapore",
        age: "64",
        date: "2012/04/09",
        salary: "$138",
      },
      {
        name: "Zenaida Frank",
        position: "Software Engineer",
        office: "New York",
        age: "63",
        date: "2010/01/04",
        salary: "$125",
      },
      {
        name: "Zorita Serrano",
        position: "Software Engineer",
        office: "San Francisco",
        age: "56",
        date: "2012/06/01",
        salary: "$115",
      },
      {
        name: "Jennifer Acosta",
        position: "Junior Javascript Developer",
        office: "Edinburgh",
        age: "43",
        date: "2013/02/01",
        salary: "$75",
      },
      {
        name: "Cara Stevens",
        position: "Sales Assistant",
        office: "New York",
        age: "46",
        date: "2011/12/06",
        salary: "$145",
      },
      {
        name: "Hermione Butler",
        position: "Regional Director",
        office: "London",
        age: "47",
        date: "2011/03/21",
        salary: "$356",
      },
      {
        name: "Lael Greer",
        position: "Systems Administrator",
        office: "London",
        age: "21",
        date: "2009/02/27",
        salary: "$103",
      },
      {
        name: "Jonas Alexander",
        position: "Developer",
        office: "San Francisco",
        age: "30",
        date: "2010/07/14",
        salary: "$86",
      },
      {
        name: "Shad Decker",
        position: "Regional Director",
        office: "Edinburgh",
        age: "51",
        date: "2008/11/13",
        salary: "$183",
      },
      {
        name: "Michael Bruce",
        position: "Javascript Developer",
        office: "Singapore",
        age: "29",
        date: "2011/06/27",
        salary: "$183",
      },
      {
        name: "Donna Snider",
        position: "Customer Support",
        office: "New York",
        age: "27",
        date: "2011/01/25",
        salary: "$112",
      },
    ],
  });
  const [checkbox1, setCheckbox1] = React.useState("");

  const showLogs2 = (e) => {
    setCheckbox1(e);
  };

  return (
    <>
      <MDBDataTableV5
        hover
        entriesOptions={[5, 20, 25]}
        entries={5}
        pagesAmount={4}
        data={datatable}
        checkbox
        headCheckboxID="id2"
        bodyCheckboxID="checkboxes2"
        getValueCheckBox={(e) => {
          showLogs2(e);
        }}
      />

      {/* <Result> {checkbox1 && <p>{JSON.stringify(delete checkbox1.checkbox && checkbox1)}</p>}</Result> */}
    </>
  );
}
