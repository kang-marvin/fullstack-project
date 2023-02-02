import React, { useState } from "react";
import { Grid, Input, Button } from "semantic-ui-react";
import { Grid, Input, Button, Card, Image } from "semantic-ui-react";


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

const ListImages = props => {
  const { results, favorites, updateFavorites } = props;

  const addToFavorites = (identifier) => {
    const list = [...favorites, identifier]
    updateFavorites(list)
  }

  const removeFromFavorites = (identifier) => {
    const list = favorites.filter(element => element !== identifier)
    updateFavorites(list)
  }

  const AddToFavorites = props => {
    const { identifier } = props;
    return <Button fluid color="green" onClick={() => addToFavorites(identifier)}>Add To Favorites</Button>
  }

  const RemoveFromFavorites = props => {
    const { identifier } = props;
    return <Button fluid color="red" onClick={() => removeFromFavorites(identifier)}>Remove From Favorites</Button>
  }

  const CardPanel = props => {
    const { imageSrc, children } = props;
    return (
      <Card raised>
        <Card.Content>
          <Image
            rounded
            fluid
            size="large"
            src={imageSrc}
          />
        </Card.Content>
        {children}
      </Card>
    )
  }

  return (
    <Card.Group itemsPerRow={4}>
      {results.map(result => {
        return (
          <CardPanel imageSrc={result.url}>
            <Card.Content extra>
              {
                favorites.includes(result.id)
                  ? <RemoveFromFavorites identifier={result.id} />
                  : <AddToFavorites identifier={result.id} />
              }
            </Card.Content>
          </CardPanel>
        )
      })}
    </Card.Group>
  )
}

const Dashboard = () => {
  const [state, setState] = useState({ currentPage: 0, searchString: "", favorites: [], results: [] })

  const handleSearch = () => {
    console.log(state.searchString)
  }

  const handleInputChange = (e) => {
    setState({...state, searchString: e.target.value})
  }

  const handleFavoritesChange = (list) => {
    setState({...state, favorites: list})
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
      <ListImages
        results={state.results}
        favorites={state.favorites}
        updateFavorites={handleFavoritesChange}
      />

      {/* Pagination */}

    </div>
  );
};

export default Dashboard;