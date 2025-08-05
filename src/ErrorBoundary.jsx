// import React from 'react';

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     // State update so the next render shows the fallback UI
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     // You can log the error to an error reporting service
//     console.error("Error caught by ErrorBoundary:", error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <div className="text-center text-red-600 text-xl font-semibold mt-10">
//           ⚠️ Something went wrong.
//         </div>
//       );
//     }

//     return this.props.children;
//   }
// }

// export default ErrorBoundary;
