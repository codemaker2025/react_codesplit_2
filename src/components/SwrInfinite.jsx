
// eslint-disable-next-line react/prop-types
export default function SwrInfinite({ posts,  isLoadingMore, isReachingEnd, lastPostRef }) {

    return (
        <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id} // Use post.id as the unique key
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <p className="text-sm text-gray-600 mb-4">{post.id}</p>
            <h5 className="text-xl font-semibold text-gray-800">{post.title}</h5>
            <p className="text-sm text-gray-600 mb-4">{post.body}</p>
            {posts.length === posts.indexOf(post) + 1 && (
              <div ref={lastPostRef} className="h-0"></div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        {isLoadingMore && (
          <div className="spinner-border text-blue-500 animate-spin h-10 w-10 border-4 border-t-transparent mx-auto" />
        )}
        {isReachingEnd && (
          <div className="text-lg text-green-500 mt-4">No more posts</div>
        )}
      </div>
    </div>
    );
}
