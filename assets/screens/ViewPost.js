import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const ViewPost = ({ route }) => {
    const { post, profile } = route.params;

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    function timeAgo(timestamp) {
        const now = new Date();
        const pastDate = new Date(timestamp.toDate());
        const timeDifference = now - pastDate;
    
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
    
        if (days > 0) {
            return days + ' day' + (days === 1 ? '' : 's') + ' ago';
        } else if (hours > 0) {
            return hours + ' hour' + (hours === 1 ? '' : 's') + ' ago';
        } else if (minutes > 0) {
            return minutes + ' minute' + (minutes === 1 ? '' : 's') + ' ago';
        } else {
            return seconds + ' second' + (seconds === 1 ? '' : 's') + ' ago';
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer} key={post._id}>
                    <View style={styles.profileContainer}>
                        <Image source={{ uri: String(profile.photo) }} style={styles.profileImage} />
                        <View style={styles.profileInfo}>
                            <Text style={styles.name}>{profile.name}</Text>
                            <Text style={styles.dateText}>
                                {timeAgo(post.date)}
                            </Text>
                        </View>
                    </View>
            </View>
                <Swiper
                    style={styles.imageSlider}
                    loop={false}
                    paginationStyle={styles.pagination}
                >
                    {post.images.map((image) => (
                        <View key={image} style={styles.mainImage}>
                            <Image source={{ uri: String(image) }} style={styles.mainImage} />
                        </View>
                    ))
                    }
                </Swiper>

                <View style={styles.bottomScreen}>
                    <Text style={styles.description}>{post.description}</Text>
                    <Text style={styles.comment}>Commentaire de la post</Text>
                </View>
        </View>
    );
}

export default ViewPost;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        padding: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: "black",
    },
    headerTitle: {
        fontWeight: "bold",
        fontSize: 20,
        flex: 1,
    },
    headerUser: {
        color: "gray",
    },
    imageContainer: {
        flex: 0.15,
        borderTopWidth: 0.5,
        borderTopColor: "black",
    },
    profileContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    profileInfo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
    },
    name: {
        fontWeight: "bold",
    },
    imageSlider: {
        height: Dimensions.get('window').height * 0.55,
    },
    pagination: {
        top: Dimensions.get('window').height * 0.52,
        backgroundColor: 'orange'
    },
    mainImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 2,
    },
    comment: {
        padding: 10,
    },
    dateText: {
        color: "gray",
    },

    bottomScreen: {
        height: Dimensions.get('window').height * 0.23,
    },

    description: {
        marginLeft: Dimensions.get('window').width * 0.05,        
    }
});
