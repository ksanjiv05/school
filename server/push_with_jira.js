const request = require('request');
const algoliasearch = require('algoliasearch');

const atomicFlag = process.argv.slice(2).includes('--atomic');

const client = algoliasearch('UE79BOFCH0', '39bcba225bacc52c6cc67ff0814fda7a');
const index = client.initIndex('jira_NAME');

const options = {
    method: 'GET',
    url: 'https://sanjiv.atlassian.net/rest/api/3/project',
    auth: { username: 'kumarsanjiv0005@gmail.com', password: 'Zzs18cx3Ub2bW98rcDbL888A' },
    headers: { Accept: 'application/json' }
  };

module.exports.start = () => {
  // Retrieve Jira projects
  request(options, (err, {statusCode}, body) => {
    if (err || statusCode !== 200){ 
      console.error('here is Some error ',err);
    };
    const projects = JSON.parse(body);
    // Add object ID property to each project
    const records = projects.map(project =>
      Object.assign({}, project, { objectID: project.id })
    );
    if (atomicFlag) {
      atomicallyReindexData(client, index, records);
    }
    else {
      indexData(index, records);
    };
  });
 
};

const indexData = (index, data) => {
  index.saveObjects(data);
  console.log(data);
}

const atomicallyReindexData = (client, {indexName}, objects) => {
  client.initIndex(indexName).replaceAllObjects(objects);
}

//start();
