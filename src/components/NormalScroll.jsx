import React from 'react'

export default function NormalScroll({posts,loader,loading,hasMore}) {
  return (
    <div className="container">
      <div className="paginationTitle mt-3 pb-5">
        <h1 className="text-center data-background text-white">Datas</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {posts.map((post) => (
          <div key={post.id} className="col">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-dark">{post.title}</h5>
                <h5 className="card-title text-dark">{post.id}</h5>
                <p className="card-text text-secondary">{post.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div ref={loader} className="text-center mt-4">
        {loading && (
          <div className="spinner-border text-primary" role="status"></div>
        )}
        {!hasMore && (
          <div className="paginationEnd">
            <h3 className="text-center text-green-600">Reached End.</h3>
          </div>
        )}
      </div>
    </div>
  )
}
