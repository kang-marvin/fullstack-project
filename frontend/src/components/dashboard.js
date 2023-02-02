import React, { useState } from "react";
import { Grid, Input, Button } from "semantic-ui-react";

const SearchPanel = props => {
  const {
    searchString,
    handleInputChange,
    handleSearch
  } = props;

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={4} />
        <Grid.Column width={6}>
          <Input
            fluid
            value={searchString}
            placeholder="Search cat images"
            onChange={handleInputChange}
          />
        </Grid.Column>
        <Grid.Column width={2}>
          <Button
            primary
            fluid
            onClick={handleSearch}
            disabled={searchString.length < 1}
          >
            Search
          </Button>
        </Grid.Column>
        <Grid.Column width={4} />
      </Grid.Row>
    </Grid>
  )
}

const Dashboard = () => {
  const [state, setState] = useState({ currentPage: 0, searchString: "", favorites: [] })

  const handleSearch = () => {
    console.log(state.searchString)
  }

  const handleInputChange = (e) => {
    setState({...state, searchString: e.target.value})
  }

  return (
    <div>
      {/* Search input */}
      <SearchPanel
        searchString={state.searchString}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
      />

      {/*  */}

      {/* Pagination */}

    </div>
  );
};

export default Dashboard;