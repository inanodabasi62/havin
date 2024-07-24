import * as tf from '@tensorflow/tfjs';

const loadModel = async () => {
  const model = await tf.loadLayersModel('/model/model.json');
  return model;
};

const getRecommendations = async (userPreferences) => {
  const model = await loadModel();
  const inputTensor = tf.tensor2d([userPreferences]);
  const predictions = model.predict(inputTensor);
  return predictions.arraySync();
};

export { getRecommendations };
