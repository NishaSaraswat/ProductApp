export const ItemsVariants = {
    start: { opacity: 0, scale:0.2 },
    stop: { 
        opacity: 1,
        scale:1,
        transition: { 
            duration: 1,
    }
},
}

/*export const ItemVariant= {
    start: { opacity: 0 },
    stop: { 
        opacity: 1,
        transition: { 
            duration: 1,
            when: "beforeChildren", // Does the animation before the child element animations begins
            staggerChildren: 0.3,   // Makes each child wait for previous child for x seconds, beofre the next child animation
        }
    },
}*/