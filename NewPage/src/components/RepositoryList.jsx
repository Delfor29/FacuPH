import React from "react";
import { View, Text } from 'react-native';
import repositories from '../data/repositories.js'

const ReposList = () => {
    return (
        <View>
            {repositories.map(repo => (
                <View key={repo.id}>
                    <Text>ID: {repo.id}</Text>
                    <Text>FullName: {repo.fullName}</Text>
                    <Text>Description: {repo.description}</Text>
                    <Text>Lanaguage: {repo.language}</Text>
                    <Text>Stars: {repo.stargazersCount}</Text>
                    <Text>Forks: {repo.forksCount}</Text>
                    <Text>Review: {repo.reviewCount}</Text>
                    <Text>Rating: {repo.rating}</Text>
                </View>
            ))}
        </View>
    )
};

export default ReposList;