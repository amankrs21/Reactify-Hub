
export default function NotFound() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>404 Not Found</h1>
            <p style={{ fontSize: '20px', color: '#555', marginTop: '10px' }}>
                Oops! It seems that the page you are looking for does not exist.
                Please check the URL or return to the homepage.
            </p>
            <button onClick={() => window.history.back()}
                style={{
                    color: '#fff',
                    fontSize: '16px',
                    cursor: 'pointer',
                    marginTop: '3rem',
                    fontWeight: 'bold',
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    border: 'none',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                        backgroundColor: '#0056b3'
                    }
                }}>
                Go Back
            </button>
        </div>
    )
}
