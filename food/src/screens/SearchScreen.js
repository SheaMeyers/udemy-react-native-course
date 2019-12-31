import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
            setErrorMessage('');
        } catch (e) {
            setErrorMessage('Something went wrong');
            setResults([])
        }
    };

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchAPI(term)}
            />
            {errorMessage.length > 0 && <Text>{errorMessage}</Text>}
            <Text>We have found {results.length}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;
