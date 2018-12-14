/* eslint-disable no-console, no-alert */
import React from 'react';
import { Table, Button, Pagination, Grid, Switch } from '../../components/core';

const data = [
  {
    name: 'Hoang',
    age: '24',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan',
    job: 'Developer',
    skill: ['ReactJS', 'NodeJS'],
    single: true,
  },
  {
    name: 'Minh',
    age: '22',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan2',
    job: 'UI/UX Design',
    skill: ['ReactJS', 'NodeJS'],
  },
  {
    name: 'Minh',
    age: '22',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan2',
    job: 'UI/UX Design',
    skill: ['ReactJS', 'NodeJS'],
  },
  {
    name: 'Minh',
    age: '22',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan2',
    job: 'UI/UX Design',
    skill: ['ReactJS', 'NodeJS'],
  },
  {
    name: 'Minh',
    age: '22',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan2',
    job: 'UI/UX Design',
    skill: ['ReactJS', 'NodeJS'],
  },
  {
    name: 'Minh',
    age: '22',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan2',
    job: 'UI/UX Design',
    skill: ['ReactJS', 'NodeJS'],
  },
  {
    name: 'Minh',
    age: '22',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan2',
    job: 'UI/UX Design',
    skill: ['ReactJS', 'NodeJS'],
  },
  {
    name: 'Minh',
    age: '22',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan2',
    job: 'UI/UX Design',
    skill: ['ReactJS', 'NodeJS'],
  },
  {
    name: 'Minh',
    age: '22',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan2',
    job: 'UI/UX Design',
    skill: ['ReactJS', 'NodeJS'],
  },
  {
    name: 'Minh',
    age: '22',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan2',
    job: 'UI/UX Design',
    skill: ['ReactJS', 'NodeJS'],
  },
  {
    name: 'Minh',
    age: '22',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan2',
    job: 'UI/UX Design',
    skill: ['ReactJS', 'NodeJS'],
  },
  {
    name: 'Minh',
    age: '22',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan2',
    job: 'UI/UX Design',
    skill: ['ReactJS', 'NodeJS'],
  },
  {
    name: 'Minh',
    age: '22',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan2',
    job: 'UI/UX Design',
    skill: ['ReactJS', 'NodeJS'],
  },
  {
    name: 'Minh',
    age: '22',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan2',
    job: 'UI/UX Design',
    skill: ['ReactJS', 'NodeJS'],
  },
];

class Demo extends React.Component {
  columns = [
    {
      title: 'Subname',
      index: 'subname',
    },
    {
      title: 'Name',
      index: 'name',
      className: 'over-ridecss',
    },
    {
      title: 'Single?',
      index: 'single',
      // render: record => <Switch checked={record.single} />,
    },
    {
      title: 'Age',
      index: 'age',
      align: 'right',
    },
    {
      title: 'Sex',
      index: 'sex',
    },
    {
      title: 'School',
      index: 'school',
      align: 'left',
    },
    {
      title: 'Job',
      index: 'job',
      render: record => `My job is ${record.job}`,
    },
    {
      title: 'Skill',
      index: 'skill',
      align: 'center',
    },
    {
      title: 'Actions',
      render: () => (
        <Button size="small" color="error">
          Remove
        </Button>
      ),
    },
  ];

  state = {
    // current: 1,
    // pageSize: 10,
    // total: 301,
    current2: 1,
    pageSize2: 10,
    total2: 1001,
  };

  render() {
    return (
      <div>
        <div className="flex mb-2 p-5">
          <Grid col span="full">
            <Table columns={this.columns} data={data} bordered selectable />
            <Grid row className="mt-2" justify="end">
              <Grid>
                <Pagination.Total
                  total={this.state.total2}
                  page={this.state.current2}
                  pageSize={this.state.pageSize2}
                />
                <Pagination
                  className="ml-1"
                  total={this.state.total2}
                  current={this.state.current2}
                  pageSize={this.state.pageSize2}
                  onChange={(event, { page }) =>
                    this.setState({ current2: page })
                  }
                />
                <Pagination.Options
                  className="ml-1"
                  options={[10, 20, 30, 50]}
                  value={this.state.pageSize2}
                  onChange={this.onChange2}
                />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Demo;
