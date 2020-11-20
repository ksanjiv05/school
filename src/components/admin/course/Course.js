import React, { useEffect, useState } from 'react';
import Table from '../Table';
import { AddCourses } from './AddCourses';
import axios from 'axios';
const Course = () => {
  const [data, setData] = useState(null);
  const [acknowledge, setacKnowledge] = useState(true);
  useEffect(() => {
    axios.get('/api/getcourse').then((res) => {
      console.log('----------------', res.data);
      setData(res.data.responce);
    });
  }, [acknowledge]);
  return (
    <div>
      <div className="topAdminHeader" style={{ height: 'auto' }}>
        <AddCourses ack={setacKnowledge} />
      </div>
      <div className="bottomAdminHeader">
        {data ? (
          <Table
            tHeader={['Course Code', 'Course Title', 'Class', 'Stream']}
            helper={['ccode', 'ctitle', 'bclass', 'stream']}
            tData={data}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Course;
